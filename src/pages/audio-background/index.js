const delay = (t = 0) => new Promise((resolve) => setTimeout(resolve, t));
nx.Page({
  data: {
    motto: 'Hello World',
    value: `少年时，想碰到一个聂小倩，拼了性命爱一场，天亮前带着她的魂魄远走他乡。
青年时，想碰到一个白素贞，家大业大，要啥有啥，吃完软饭一抹嘴，还有人负责把她关进雷峰塔。
中年时，想要一个田螺姑娘，温婉可人，红袖添香，半夜写累了，让她变回原形，加干辣椒、花椒、姜、蒜片爆炒，淋入香油，起锅装盘。`
  },
  // 事件处理函数
  methods: {
    input1(e) {
      // this.setData({ value:})
      const { value } = e.detail;
      this.setData({ value });
    },
    play3() {
      const self = this;
      const { value } = this.data;
      const url = `https://tsscdn-dev.finxos.com/tu-resources/xlsfile/media/2019_08/2019_08_26/73796d626f6c455ad83766489b22d40068681ba03a6a.mp3`;
      wx.showToast({ title: 'Play!' });
      self.ctx.src = url;
    },
    play1() {
      const self = this;
      const { value } = this.data;
      const url = `http://tts.baidu.com/text2audio/text2audio?lan=zh&ie=UTF-8&spd=3&text=${value}&type=audio/mpeg`;
      wx.showToast({ title: 'Play1111!' });
      self.ctx.src = url;
    },
    play2_opt() {
      wx.showToast({ title: '开始请求!' });
      const self = this;
      const { value } = this.data;
      const url = `http://tts.baidu.com/text2audio/text2audio?lan=zh&ie=UTF-8&spd=3&text=${value}`;
      wx.downloadFile({
        url,
        header: {
          'Content-type': 'audio/mp3'
        },
        success: function(res) {
          wx.showToast({ title: '开始播放!' });
          self.ctx.src = res.tempFilePath;
        }
      });
    },
    play2() {
      wx.showToast({ title: '开始请求!' });
      const self = this;
      const { value } = this.data;
      const newPath = `${wx.env.USER_DATA_PATH}/test.mp3`;
      const url = `http://tts.baidu.com/text2audio/text2audio?lan=zh&ie=UTF-8&spd=3&text=${value}`;
      wx.downloadFile({
        url,
        filePath: newPath,
        success: function(res) {
          wx.showToast({ title: '开始播放!' });
          // wx.playVoice({ filePath: newPath })
          self.ctx.src = res.filePath;
        }
      });
    }
  },
  lifetimes: {
    load() {
      const backgroundAudioManager = wx.getBackgroundAudioManager();

      backgroundAudioManager.title = '此时此刻';
      backgroundAudioManager.epname = '此时此刻';
      backgroundAudioManager.singer = '许巍';
      backgroundAudioManager.coverImgUrl =
        'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000';
      // 设置了 src 之后会自动播放
      this.ctx = backgroundAudioManager;
    }
  }
});
