module.exports = {
    errUserResponse: async(message) => {
        return { code: 400, result: { message: message } };
    },
    errCloseConnectResponse: async(message, connection) => {
        await connection.end();
        return { code: 400, result: { message: message } };
    },
    errServerResponse: async(message) => {
        return { code: 502, result: { message: message } };
    },
    errPermissionResponse: async() => {
        return { code: 401, result: { message: 'permission denied' } };
    },
    errUrsPermissionResponse: async(message) => {
        return { code: 401, result: { message: message } };
    },
    dataResponse: async(message, data) => {
        return { code: 200, result: { message: message, data: data } };
    },
    successResponse: async(message, data) => {
        return { code: 200, result: { message: message, data: data } };
    },
    success: async(message) => {
        return { code: 200, result: { message: message } };
    },
    successCloseConnection: async(message, data, connection) => {
        await connection.end()
        return { code: 200, result: { message: message, data: data } };
    },
    createSuccessResponse: async(message) => {
        return { code: 201, result: { message: message } };
    },
    errRollback: async(message, connection) => {
        await connection.rollback();
        await connection.end();
        return { code: 400, result: { message: message } };
    },
    successCommit: async(message, connection) => {
        console.log(message);
        await connection.commit();
        await connection.end();
        return { code: 200, result: { message: message } };
    },
};