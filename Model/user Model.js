import db from "..\Db\db.js";
const table ="users";
class UserModel{
    static async createUser({name,email,password}){
        const sql =`INSERT INTO ${table} values(?,?,?)`
        const[result]=await db.execute(sql,[name,email,password])
        
        return result.insertId;
    }
    static async getAllusers(){
        const sql = 'SELECT * FROM ${table}'
        const [rows] = db.execute(sql);
        return rows;
    }
}
export default UserModel;
