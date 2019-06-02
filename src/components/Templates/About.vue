<template>
  <div class="about">
    <b-container>

      <div class="box">
        <h1>このサイトについて</h1>
          <div class="box-content">
            <p>このサイトは、ボーイスカウト日本連盟の加盟員が広報活動や組織拡充活動のためのさまざまな素材を取得できるサイトです。</p>
            <router-link to='/about' class="text-md-right">各種使用・著作権等に関して（必ずお読みください）</router-link>
          </div>
        <v-divider></v-divider>
      </div>

      <div class="box">
        <h1>各種使用に関して</h1>
          <div class="box-content">
            <p>
              このサイトに掲載しているロゴ等は、日本におけるスカウト運動の統一のイメージを示すもので、ボーイスカウトの広報活動や組織拡充活動等に使用するものです。
              掲載している ものすべての著作権等は(公財)ボーイスカウト日本連盟(および各都道府県連盟)が所有していますが、ボーイスカウト日本連盟の加盟員が各ガイドに従い使用する場合は、
              使用許 可を申請する必要はありません。また、加盟員以外が使用する場合は、下記問い合わせ先までご相談ください。 使用期限のあるものは、必ずその指示に従ってください。
            </p>
            <h2>ロゴについて</h2>
            <div class="box-content">
              <p>各ロゴに関しては、それぞれのガイドを必ずご覧ください。</p>
              <h3>許可の必要が無いもの(例)</h3>
              <ul>
                <li>隊、団、地区、県連盟等の機関誌</li>
                <li>ポスターやパンフレット等の広報ツール</li>
                <li>名刺</li>
                <li>ホームページ</li>
              </ul>
              <h3>許可の必要なもの(例)</h3>
              <ul>
                <li>有償頒布のもの</li>
                <li>ワッペン等の作成</li>
                <li>収益がある物</li>
                <li>スカウト章のみの使用</li>
              </ul>
            </div>
            <h3>ムービー、各種媒体について</h3>
            <div class="box-content">
              <p>ムービーやその他媒体に関しては、改変禁止です。なお、営利目的での上映や使用は固く禁じられています。</p>
            </div>
          </div>
        <v-divider></v-divider>
      </div>

      <div class="box">
        <h1>お問合せ先</h1>
          <div class="box-content">
            <p>
              ボーイスカウト日本連盟事務局 社会連携・広報部<br />
              Eメール:pr@scout.or.jp / 電話:03-6913-6262（代表）
            </p>
          </div>
        <v-divider></v-divider>
      </div>

    </b-container>
  </div>
</template>

<style scoped>
.about{
  padding-top: 64px;
}
.box-content{
  padding:0 24px;
  font-size:15px;
  margin-bottom: 2rem;
}

.box{
  margin:2rem 0;
}
</style>
