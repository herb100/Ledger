import Mock from 'mockjs'
import { baseUrl, mockDebug } from '../config.js'

if (mockDebug) {
	Mock.mock(baseUrl + '/bill', {
		"array": [
			{"transaction": "income", "bill_type": "life_service", "datetime": "2020-11-12 21:37", "money": 4.00, "payee": "致远创想"},
			{"transaction": "income", "bill_type": "other_human", "datetime": "2020-11-12 21:37", "money": 12.07, "payee": "扫二维码付款-给阿龙"},
			{"transaction": "income", "bill_type": "hotel", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
			{"transaction": "income", "bill_type": "hotel", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
			{"transaction": "income", "bill_type": "travel", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
			{"transaction": "income", "bill_type": "life_service", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
			{"transaction": "spending", "bill_type": "medical_care", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
			{"transaction": "spending", "bill_type": "medical_care", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
			{"transaction": "spending", "bill_type": "other_human", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
			{"transaction": "spending", "bill_type": "life_service", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
			{"transaction": "spending", "bill_type": "medical_care", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
			{"transaction": "spending", "bill_type": "life_service", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
			{"transaction": "spending", "bill_type": "redpacked", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
			{"transaction": "spending", "bill_type": "life_service", "datetime": "2020-11-12 21:37", "money": 1.50, "payee": "扫二维码付款-给"},
		]
	})
}
