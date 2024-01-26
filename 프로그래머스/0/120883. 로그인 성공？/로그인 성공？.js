function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const user =  db.filter((el) => el[0] === id );
    return user.length > 0 ? (user[0][1] === pw ? 'login' : 'wrong pw') : 'fail';
    
}