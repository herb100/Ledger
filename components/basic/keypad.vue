<template>
	<view class="keypad">
		<span class="left-part" ref="leftPart">
			<span class="common" @click="changeValue(item['value'])" v-for="(item, index) in leftKeys" :key="index" :class="item['key']+'-key'">
				{{item['value']}}
			</span>
		</span>
		<span class="right-part">
			<span class="common" @click="changeValue(item['value'])" v-for="(item, index) in rightKeys" :key="index" :class="item['key']+'-key'">
				{{item['value']}}
			</span>
		</span>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leftKeys: [{
						value: 1,
						key: 'common'
					},
					{
						value: 2,
						key: 'common'
					},
					{
						value: 3,
						key: 'common'
					},
					{
						value: 4,
						key: 'common'
					},
					{
						value: 5,
						key: 'common'
					},
					{
						value: 6,
						key: 'common'
					},
					{
						value: 7,
						key: 'common'
					},
					{
						value: 8,
						key: 'common'
					},
					{
						value: 9,
						key: 'common'
					},
					{
						value: '.',
						key: 'common'
					},
					{
						value: 0,
						key: 'common'
					},
					{
						value: 'delete',
						key: 'common'
					}
				],
				rightKeys: [{
						value: '-',
						key: 'sub'
					},
					{
						value: '+',
						key: 'add'
					},
					{
						value: '确定',
						key: 'confirm'
					},
					{
						value: '取消',
						key: 'cancle'
					}
				],
				keypadValue: [''],
				keypadLastValueType: ''
			}
		},
		methods: {
			// keppadValue: ['num', 'operator', 'num'.....]
			changeValue: function(value) {
				switch (value) {
					case '确定':
						let {res, isRight} = this.calString(value)
						this.keypadValue = []

						if (isRight) {
							this.$emit('createBill', res)
						}
						break;
					case '取消':
						this.keypadValue = []
						this.$emit('cancleBill')
						break;
				}
				
				if (this.keypadValue.length === 0) {
					this.keypadValue.push('')
				}

				let keypadLastIndex = this.keypadValue.length - 1
				let keypadLastValue = this.keypadValue[keypadLastIndex]
				let keypadLastType = this.checkType(keypadLastValue)
				let curValueType = this.checkType(value)
				
				switch(curValueType) {
					case 'dots':
						if (keypadLastType === 'operator') {
							this.keypadValue.push('0.')
							break
						}
						if (keypadLastValue === '') {
							this.keypadValue[keypadLastIndex] = '0.'
							break
						}
						if (!keypadLastValue.endsWith('.') && keypadLastValue.indexOf('.') === -1) {
							this.keypadValue[keypadLastIndex] = keypadLastValue + '.'
						}
						break
					case 'number':
						let dotsIndex = keypadLastValue.indexOf('.')
						
						if (keypadLastType === 'operator') {
							this.keypadValue.push(value.toString())
							break
						}

						if (dotsIndex === -1) {
							this.keypadValue[keypadLastIndex] = keypadLastValue + value
						} else {
							if (keypadLastValue.length - 1 - dotsIndex < 2) {
								this.keypadValue[keypadLastIndex] = keypadLastValue + value
							}
						}
						break
					case 'operator':
						if (this.checkType(keypadLastValue) === 'operator') {
							this.keypadValue[keypadLastIndex] = value
						} else {
							this.keypadValue.push(value)
						}
						break
					case 'delete':
						this.keypadValue[keypadLastIndex] = keypadLastValue.substr(0, keypadLastValue.length - 1)

						if (this.keypadValue[keypadLastIndex] === '' && this.keypadValue.length !== 0) {
							this.keypadValue.pop()
						}
						break
				}
				this.$emit('changeValue', this.keypadValue.join(''))
			},
			// 中缀表达式求值
			calString: function(value) {
				let isRight = true
				let numArr = []
				let operArr = []
				
				for (let value of this.keypadValue) {
					if (!isNaN(value)) {
						numArr.push(Number(value))
						continue
					}
					// 操作符栈为空则入栈，否则对比栈顶操作符和当前操作符
					if (operArr.length === 0) {
						operArr.push(value)
					} else {
						let pri1 = this.getPriority(operArr[operArr.length-1])
						let pri2 = this.getPriority(value)
						if (pri1 >= pri2) {
							let num2 = numArr.pop()
							let num1 = numArr.pop()
							let res = this.calFormula(num1, num2, operArr.pop())
							numArr.push(res)
						}
						operArr.push(value)
					}
				}
				
				// 如果操作符栈不为空，则继续运行
				while(operArr.length > 0) {
					let num2 = numArr.pop()
					let num1 = numArr.pop()
					let res = this.calFormula(num1, num2, operArr.pop())
					numArr.push(res)
				}
				
				let res = numArr.pop()
				
				return {
					res: res.toFixed(2),
					isRight: isRight
				}
			},
			getPriority: function(value) {
				if (value == '+' || value == '-') {
					return 2
				} else if (value == '*' || value == '/') {
					return 3
				} else {
					return 4
				}
			},
			calFormula: function(num1, num2, operator) {
				switch(operator) {
					case '+':
						return num1 + num2
					case '-':
						return num1 - num2
					case '*':
						return num1 * num2
					case '/':
						return num1 / num2
				}
			},
			checkType: function(value) {
				// const operators = ['+', '-', '*', '/']
				let type = ''
				
				switch(value) {
					case '.':
						type = 'dots'
						break
					case 'delete':
						type = 'delete'
						break
					case '+':
						type = 'operator'
						break
					case '-':
						type = 'operator'
						break
					default:
						type = !isNaN(value) ? 'number' : ''
				}
				
				return type
			}
		}
	}
</script>

<style scoped>
	.keypad {
		display: flex;
		flex-wrap: wrap;
		font-weight: 550;
		justify-content: center;
		padding: 0% 1%;
	}

	.left-part {
		flex: 7.5;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.right-part {
		flex: 2.5;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.common {
		display: inline-block;
		border-radius: 6rpx;
		background-color: #FFFFFF;
		border: 1px solid #fafafa;
		text-align: center;
		margin: 1px;
		height: 25%;
		line-height: 72rpx;
	}

	.common-key {
		/* #ifdef MP-WEIXIN */
		width: 32%;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		width: 31.5%;
		/* #endif */
	}

	.zero-key {
		width: 63.5%;
	}

	.sub-key,
	.add-key {
		width: 100%;
	}

	.confirm-key {
		height: 25%;
		width: 100%;
	}

	.cancle-key {
		height: 25%;
		width: 100%;
	}
</style>
