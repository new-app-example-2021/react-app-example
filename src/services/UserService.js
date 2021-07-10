import http from '../http-common';

const getAll = () =>{
    return http.get("/users");
};

const getOne = id =>{
    return http.get(`/users/${id}`);
};

const createOne = data =>{
    return http.post("/users", data);
};
const deleteOne = (id, data) => {
    return http.put(`/users/${id}`, data);
};

export default{
    getAll,
    getOne,
    createOne,
    deleteOne,
};
