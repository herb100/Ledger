<template>
	<view class="date-time-picker">
		<view class="uni-padding-wrap">
			<view class="picker" @tap="showModal" data-target="dateTimePickerModal">
				{{year}}年
				<text>{{month}}月</text>
				<!-- <text>{{day}}日</text> -->
				<!-- <slot name="datetimeIcon"></slot> -->
				<span class="more-date">▼</span>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='dateTimePickerModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-green">确定</view>
					<view class="action text-blue" @tap="hideModal">取消</view>
				</view>
				<view class="padding-xl bill-type-modal-body">
					<picker-view :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="bill-type-modal-body">
						<picker-view-column>
							<view class="item" v-for="(item,index) in this.years" :key="index">{{item}}年</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item,index) in this.months" :key="index">{{item}}月</view>
						</picker-view-column>
						<!-- <picker-view-column>
							<view class="item" v-for="(item,index) in this.days" :key="index">{{item}}日</view>
						</picker-view-column> -->
					</picker-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			fields: {
				type: String,
				default: 'year',
				validator: function(value) {
					return ['year', 'month', 'day'].indexOf(value) !== -1
				}
			}
		},
		data: function() {
			return {
				title: 'picker-view',
				years: [],
				months: [],
				days: [],
				year: 0,
				month: 0,
				day: 0,
				value: [],
				visible: false,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
				modalName: ''
			}
		},
		created: function() {
			this.initData()
		},
		mounted: function() {},
		methods: {
			showModal: function(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal: function(e) {
				this.modalName = null
			},
			bindChange: function(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},
			initData: function() {
				const date = new Date()
				this.year = date.getFullYear()
				this.month = date.getMonth() + 1
				this.day = date.getDate()
				this.value = [9999, this.month - 1, this.day - 1]

				for (let i = 1990; i <= date.getFullYear(); i++) {
					this.years.push(i)
				}
				for (let i = 1; i <= 12; i++) {
					this.months.push(i)
				}
				for (let i = 1; i <= 31; i++) {
					this.days.push(i)
				}
			}
		}
	}
</script>

<style scoped>
	.more-date {
		font-size: 1rpx;
		color: #9dd9b8;
	}

	.bill-type-modal-body {
		height: 550rpx;
		color: #000000;
	}
</style>
