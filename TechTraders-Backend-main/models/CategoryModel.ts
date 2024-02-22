import { connection } from "../database/config";

const CategoryModel = {

    getAllCategories: async () => {
        try {
            const [result, metadata] = await connection.query('SELECT * FROM category');
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    getCategory: async (id: any) => {
        try {
            const [result, metadata] = await connection.query('SELECT * FROM category WHERE id =?', [id]);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    addCategory: async (name: any) => {
        try {
            const [result, metadata] = await connection.query(`INSERT INTO category (category_name) VALUES ('${name}')`);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    updateCategory: async (id: any, name: any) => {
        try {
            const [result, metadata] = await connection.query(`UPDATE category SET category_name = '${name}' WHERE id = ${id}`);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    deleteCategory: async (id: any) => {
        try {
            const [result, metadata] = await connection.query(`DELETE FROM category WHERE id = ${id}`);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    


}

export default CategoryModel;