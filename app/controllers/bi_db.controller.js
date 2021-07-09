const bi_data_provider = require("../helpers/bi_data_provider");

exports.getFactTablesData=async (req, res) => {
     bi_data_provider.GetBIFactTablesData().then((value)=>{
         res.send({value});
     }).catch((err)=>{
        res.status(500).send({ message: err.message });
     });
}

exports.getDimTablesData=async (req, res) => {
    bi_data_provider.GetBIDimTablesData().then((value)=>{
        res.send({value});
    }).catch((err)=>{
       res.status(500).send({ message: err.message });
    });
}

