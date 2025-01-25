import { MongoClient } from "mongodb";
import { Project } from "@/tools/data.model";

export async function getProjects() {
    // construct a MongoClient object
    let mongoClient: MongoClient = new MongoClient(process.env.MONGO_URL!);

    let projectArray:Project[];
    try {
        await mongoClient.connect();
        // get JSON data from mongoDB server (ASYNC task)
        projectArray = await mongoClient.db(process.env.MONGO_DB_NAME).collection<Project>(process.env.MONGO_COLLECTION_PROJECTS!).find().sort({name:1}).toArray();
        // need to convert ObjectId objects to strings
        projectArray.forEach((project:Project) => project._id = project._id.toString());
    } catch (error:any) {
        console.log(`>>> ERROR : ${error.message}`);
        throw error;
    } finally {
        mongoClient.close();
    }

    return {projectArray};
}