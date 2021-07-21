const bi_data_provider = require("../helpers/bi_data_provider");
const bi_query_parser =require("../helpers/bi_query_parser");
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

exports.ExecSql=(req, res) => {
    console.log(req.body);
    var sql = bi_query_parser.queryToSql(req.body);
    try {
        var data =  bi_query_parser.sqlToData(sql);
        res.send({data});    
    } catch (error) {
        res.status(500).send({error});
    }
}

