// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("skills"));

// 指定图表的配置项和数据
var option = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["静态页面", "编程基础", "项目开发", "Vue", "React"],
  },
  series: [
    {
      name: "技能",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 40, name: "静态页面" },
        { value: 30, name: "编程基础" },
        { value: 30, name: "项目开发" },
        { value: 40, name: "Vue" },
        { value: 20, name: "React" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
