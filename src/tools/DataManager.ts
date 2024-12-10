import { MongoClient } from "mongodb";
import { Project } from "@/tools/data.model";

// MongoDB constants
const MONGO_URL:string = "mongodb://mongo:27017/";
const MONGO_DB_NAME:string = "dbProjects";	
const MONGO_COLLECTION_PROJECTS:string = "projects";

export async function getProjects() {
    // construct a MongoClient object
    let mongoClient: MongoClient = new MongoClient(MONGO_URL);

    let projectArray:Project[];
    try {
        await mongoClient.connect();
        // get JSON data from mongoDB server (ASYNC task)
        projectArray = await mongoClient.db(MONGO_DB_NAME).collection<Project>(MONGO_COLLECTION_PROJECTS).find().sort({name:1}).toArray();
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