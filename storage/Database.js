import * as SQLITE from 'expo-sqlite';

const DB_NAME = 'Vinted.db';
const USERS_TABLE_NAME = 'users';

db = SQLITE.openDatabase(DB_NAME);

class Database{

    createDatabase(){
        db.transaction((tx) => {
            tx.executeSql(`create table if not exists ${USERS_TABLE_NAME} (id integer primary key not null, username text, password text)`);
        });
    }

    searchForUser(username, password, callback){
        if(!this.isTextValid(username) || !this.isTextValid(password)){
            callback(false);
            return;
        }

        db.transaction((tx) => {
            tx.executeSql(
            `select * from ${USERS_TABLE_NAME} where username = ? and password = ?`, 
            [username, password],
            (_, { rows }) => { 

                if(rows.length === 0){
                    callback(false)
                    return;
                }

                callback(true, rows._array[0].id);
            },
            (_, { error }) => { 
                console.log('An error occured while selecting user from database!');
                callback(false);
            } );
        });

    }

    async addUser(username, password, callback){
        if(!this.isTextValid(username) || !this.isTextValid(password)){
            callback(false);
            return;
        }
        db.transaction(async (tx) => {
            tx.executeSql(`insert into ${USERS_TABLE_NAME} (username, password) values (?,?)`,
                        [username, password],
                        (_, result) => {  callback(true, result.insertId); },
                        (_, error) => { 
                            console.log('error while inserting user into database!');
                            callback(false);
                        });
        });
    }
    

    //TODO: this function is for testing purposes only, please delete on release
    clearUsersTable(){

        db.transaction((tx) => {
            tx.executeSql(`delete from ${USERS_TABLE_NAME}`, 
            [], 
            (_, { result }) => { console.log('successfully cleared users table'); }, 
            (_, error ) => { console.log('error while clearing users table!'); })
        })
    }

    printAllUsers(){
        db.transaction((tx) => {
            tx.executeSql(`select * from ${USERS_TABLE_NAME}`,
            [],
            (_, {rows} ) => { 

                console.log('\nUsers:\n-----------------------------------------------------');
                for(let i = 0; i < rows.length; i++)
                    console.log('[' + rows._array[i].id + '] ' + rows._array[i].username +
                     ' : ' + rows._array[i].password);

                console.log('-----------------------------------------------------\n');

                //console.log('Users: ' + JSON.stringify(rows)); 
            },
            (_, error) => { console.log('An error occured while selecting all users from database'); })
        })
    }

    isTextValid(text){
        if(text === null || text === "")
            return false;
        return true;
    }
}

export default new Database;