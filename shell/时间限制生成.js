function zero(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}

var timeList = []
var sh=0,sm=0,eh=0,em=0
// 每个周期 最多几个人
var count = 1
// 间隔周期
var interval = 10
for(;sh<24;){
	for(;sm<=60;){
		eh = sh
		em = sm + interval
		if(em >= 60){
			eh++
			em = em - 60
		}		
		if(eh > 24){
			eh = 0
		}
		timeList.push({
			"time": zero(sh,2) + ':' + zero(sm,2) + '-' + zero(eh,2) + ':' + zero(em,2),
			"count": count
		})
		sm = em
		if(sm == 0){
			break
		}
	}
	sh++
	sm = 0
}
console.log(JSON.stringify(timeList).length,JSON.stringify(timeList))