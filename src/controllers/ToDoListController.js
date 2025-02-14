const ToDoListModel = require('../models/ToDoListModel')

exports.CreateToDo = async(req, res) => {
    try {
        let reqBody = req.body;
        let ToDoSubject = reqBody["ToDoSubject"]
        let ToDoDescription = reqBody['ToDoDescription']
        let UserName = req.headers['username']
        let ToDoStatus = "New"
        let ToDoCreateDate = Date.now()
        let ToDoUpdateDate = Date.now()
        let PostBody = {
            UserName: UserName,
            TodoSubject: ToDoSubject,
            TodoDescription: ToDoDescription,
            TodoStatus: ToDoStatus,
            TodoCreateDate: ToDoCreateDate,
            ToDoUpdateDate: ToDoUpdateDate
        }
        let data = await ToDoListModel.create(PostBody);
        res.status(200).json({ status: 'Success', data: data });
    } catch (error) {
        res.status(500).json({ status: 'Fail', error: error.message });
    }
};

exports.SelectToDo = async(req, res) => {
    try {
        let UserName = req.headers['username']
        let data = await ToModel.find({ UserName: UserName })
        res.status(200).json({ status: 'Success', data: data });
    } catch (error) {
        res.status(500).json({ status: 'Fail', error: error.message });
    }
}

exports.UpdateToDo = async(req, res) => {
    try {
        let ToDoSubject = req.body['ToDoSubject']
        let ToDoDescription = req.body['ToDoDescription']
        let _id = req.body['_id']
        let ToDoUpdateDate = Date.now()

        let PostBody = {
            ToDoSubject: ToDoSubject,
            ToDoDescription: ToDoDescription,
            ToDoUpdateDate: ToDoUpdateDate
        }
        let data = ToDoListModel.updateOne({ _id: _id }, { $set: PostBody }, { upsert: true })

        res.status(200).json({ status: 'Success', data: data });
    } catch (error) {
        res.status(500).json({ status: 'Fail', error: error.message });
    }
}

exports.UpdateStatusToDo = async(req, res) => {
    try {
        let ToDoStatus = req.body['ToDoStatus']
        let _id = req.body['_id']
        let ToDoUpdateDate = Date.now()

        let PostBody = {
            ToDoStatus: ToDoStatus,
            ToDoUpdateDate: ToDoUpdateDate
        }
        let data = ToDoListModel.updateOne({ _id: _id }, { $set: PostBody }, { upsert: true })

        res.status(200).json({ status: 'Success', data: data });
    } catch (error) {
        res.status(500).json({ status: 'Fail', error: error.message });
    }
}

exports.RemoveToDo = async(req, res) => {
    try {

        let _id = req.body['_id']

        let data = ToDoListModel.remove({ _id: _id })

        res.status(200).json({ status: 'Success', data: data });
    } catch (error) {
        res.status(500).json({ status: 'Fail', error: error.message });
    }
}

exports.SelectToDoByStatus = async(req, res) => {
    try {
        let UserName = req.headers['username']
        let ToDoStatus = req.body['ToDoStatus']
        let data = await ToModel.find({ UserName: UserName, ToDoStatus: ToDoStatus })
        res.status(200).json({ status: 'Success', data: data });
    } catch (error) {
        res.status(500).json({ status: 'Fail', error: error.message });
    }
}

exports.SelectToDoByDate = async(req, res) => {
    try {
        let UserName = req.headers['username']
        let FormDate = req.body['FormDate']
        let ToDate = req.body['ToDate']
        let data = await ToModel.find({ UserName: UserName, ToDoCreateDate: { $gte: new Date(FormDate), $lte: new Date(ToDate) } })
        res.status(200).json({ status: 'Success', data: data });
    } catch (error) {
        res.status(500).json({ status: 'Fail', error: error.message });
    }
}