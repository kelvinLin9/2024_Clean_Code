const marketingChannels = [
  { name: 'Google Ads', spend: 10000, revenue: 35000, roas: 3.5 },
  { name: 'Facebook Ads', spend: 8000, revenue: 24000, roas: 3.0 },
  { name: 'LinkedIn Ads', spend: 5000, revenue: 12000, roas: 2.4 },
  { name: 'Twitter Ads', spend: 4000, revenue: 10000, roas: 2.5 },
  { name: 'Instagram Ads', spend: 6000, revenue: 15000, roas: 2.5 }
];

// 1. 使用 forEach 發送通知
const res = marketingChannels.filter(function(item, index) {
  return item.roas > 2
})
console.log(res);

// 2. 使用 filter 篩選大額訂單

let totalSpent = 0;
let totalRevenue = 0;
marketingChannels.forEach(function(item){
  totalSpent += item.spend;
  totalRevenue += item.revenue;
})
console.log(totalSpent, totalRevenue);