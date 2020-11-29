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
				keypadValue: ''
			}
		},
		methods: {
			changeValue: function(value) {
				switch (value) {
					case '确定':
						let {res, isRight} = this.calString(this.keypadValue)
						
						if (isRight) {
							this.$emit('createBill')
						}
						break;
					case '取消':
						this.$emit('cancleBill')
						break;
					case 'delete':
						let len = this.keypadValue.length
						this.keypadValue = this.keypadValue.substr(0, len - 1)
						break;
					default:
						this.keypadValue += value
				}
				this.$emit('changeValue', this.keypadValue)
			},
			calString: function(keypadValue) {
				// 中缀表达式？
				let isRight = true
				
				try {
					for (let i = 0; i < keypadValue.length; i++) {
						console.log(keypadValue[i])
					}
				} catch(err) {
					// console.log(err)
					isRight = false
				}
				
				return {res: 1, isRight: isRight}
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
