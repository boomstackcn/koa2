import request from '../utils/request.js'

let proxy = async (ctx, next) => {
	let reg = RegExp(/\/proxy\/*/)
	if(ctx.request.href.match(reg)){
        let url = `http://192.168.1.205:32211/api/Data/Data/QueryDataOnly`;
        let res = await request({
            method: 'post',
            url: url,
            json: {
                Token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkY3MUY3NEQ4NkUyMjQ2MDY5QzM1RUQ0RDcwMDU0MjZGOUI2QURBMTEiLCJ0eXAiOiJKV1QifQ.eyJ0b2tlbkluZm8iOiJ7XCJIdHRwVG9rZW5JZFwiOlwiNzc5NDIyNTA1YjRiZDVkOTI3Mzg5OTRjOTJkMDMxOTJcIixcIk5pY2tOYW1lXCI6XCLpmbbov5tcIixcIkFjY291bnRJZFwiOjIsXCJQaG9uZVwiOlwiMTMxNjYyNTI2MjBcIixcIlJvbGVzXCI6WzEsMiw3LDhdLFwiQWNjb3VudFR5cGVJZFwiOjF9IiwibmJmIjoxNjQ1MDYxODkyLCJleHAiOjE2NDUwNjM2OTIsImlhdCI6MTY0NTA2MTg5MiwiaXNzIjoiTVROVCIsImF1ZCI6Ik1UV0QifQ.V8yPezl8Npgh-hqhFWp9c45mrJuBfCmahRX8osNVBRUGrYGYBRB8xHF7UPxrFwTzDpHOAdP49YsGSQWKRTrlwfrxMa1qKO4_J25vAjE8MPTe_mp5ktA1fTCMKQaAcBQSligDXSPdmAHKgX9i3VhAGBsOrIB59b8xeqW1jQYjsfQnd7KDlbq-gjD6Z7gfzi6perW16MQZmtNMu427J0G3FHs9Q8kYhupcBkS7qlD1aU25HN2yo1DM9l_i1505nV7Nq5u0pmXnWZRY6b1qnjb7yMGaTRhclRTBEfdBDqIPpTK_AWhlbztra2LpaaiWMhyi464SS3P71r_9IR2AhChuMw',
                Data: {
                    TableId: '1532',
                    Fields: [],
                    Where: [],
                    WhereOr: null,
                    Conditions: null,
                    Sort: [],
                    Current: 0,
                    Psize: 2,
                },
                AccountId: 2,
            },
        });
        ctx.status = res.statusCode
        ctx.body = res.body
	}
    await next()
}
export default proxy