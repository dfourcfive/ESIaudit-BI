const BI_db = require('./BI_db_handler.js');

exports.GetFactTables= async()=>{
    var tables=[];
   var result = await  BI_db.sequelize.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';");
   const arr = Array.from(result);
   arr.forEach(element => {
       tables.push(element[0]);
       console.log('GetFactTables :'+element[0]);
   });
    return tables;
}

exports.GetFactTableFields=async(table_name)=>{
   var result= await BI_db.sequelize.query("SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = 'public' AND  TABLE_NAME = '"+table_name+ "';");
   const arr = Array.from(result[0]);
        var fields=new Map();
        var object = {};
        fields.set('table',table_name);
        for(let i=0;i<arr.length;i++){
            fields.set(arr[i]['column_name'],arr[i]['data_type']);
            //fields[arr[i]['column_name']]=arr[i]['data_type']
        }
        fields.forEach((value, key) => {
            var keys = key.split('.'),
                last = keys.pop();
            keys.reduce((r, a) => r[a] = r[a] || {}, object)[last] = value;
        });
   return object;
}


