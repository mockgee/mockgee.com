const config = {
  apiURL: "https://2h5umgq0c6.execute-api.eu-west-1.amazonaws.com/notifyByEmail",
  reCaptcha: {
    sitekey: "6LeOg-oUAAAAAJKrgoZyuaV4Yry_ccsMKAd-i9A3",
    URL: "https://pcr0h6j1ck.execute-api.ap-south-1.amazonaws.com/verifyReCaptcha"
  },
  images: {
    hero: "https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/dev_productivity_transparent.png",
    describeOne: "https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/mockgee_describe_one.png",
    describeTwo: "https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/mockgee_describe_two.png",
    describeThree: "https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/mockgee_describe_three.png",
    documentation: "https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/mockgee_documentation.png",
    aboutUS: "https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/mockgee_profile.png",
    constact: "https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/mockgee_contact.png"
  },
  app: {
    url: "/guide/installation"
  }
}

module.exports = config