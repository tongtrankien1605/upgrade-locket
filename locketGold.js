/***********************************************
> locketGold by Tong Tran Kien
***********************************************/    

const mapping = {
  "%E8%BD%A6%E7%A5%A8%E7%A5%A8": ["vip+watch_vip"],
  Locket: ["Gold"],
};

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
var obj = JSON.parse($response.body);
obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

// Thông tin đăng ký và quyền lợi
var kienmessi = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-18T01:04:17Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2004-07-03T01:04:18Z",
  purchase_date: "2004-07-03T01:04:17Z",
  store: "app_store",
};

var tongtrankien1605 = {
  grace_period_expires_date: null,
  purchase_date: "2004-07-03T01:04:17Z",
  product_identifier: "com.kienmessi.premium.yearly",
  expires_date: "2099-12-18T01:04:17Z",
};

// Logic để kiểm tra User-Agent và áp dụng mapping
const match = Object.keys(mapping).find((e) => ua.includes(e));

if (match) {
  let [e, s] = mapping[match];
  if (s) {
    // Nếu có ánh xạ, áp dụng thông tin đăng ký và quyền lợi tương ứng
    tongtrankien1605.product_identifier = s;
    obj.subscriber.subscriptions[s] = kienmessi;
  } else {
    obj.subscriber.subscriptions["com.kienmessi.premium.yearly"] = kienmessi;
  }
  obj.subscriber.entitlements[e] = tongtrankien1605;
} else {
  // Nếu không có match, sử dụng thông tin mặc định
  obj.subscriber.subscriptions["com.kienmessi.premium.yearly"] = kienmessi;
  obj.subscriber.entitlements.pro = tongtrankien1605;
}

// Giả sử có một danh sách tên bạn bè
var friendsUsernames = [
  { username: "tongtrankien2004", entitlement: "Gold" }, 
  { username: "tongtrankien1605", entitlement: "Gold" },
  { username: "ngochuyenngu", entitlement: "Gold" },
];

// Cập nhật thông tin cho bạn bè
friendsUsernames.forEach(friend => {
  // Logic để thay đổi entitlement của bạn bè
  obj.subscriber.entitlements[friend.entitlement] = tongtrankien1605;
});

$done({ body: JSON.stringify(obj) });
