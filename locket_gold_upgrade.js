// ========= Nhập tên người dùng ========= //
var username = "tongtrankien2004"; // Thay thế bằng username bạn muốn nâng cấp lên Locket Gold

// ========= Thông tin đăng ký và quyền lợi ========= //
var kienmessi = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-18T01:04:17Z", // Gia hạn đến ngày 2099
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2004-07-03T01:04:18Z",
  purchase_date: "2004-07-03T01:04:17Z",
  store: "app_store",
};

// Thông tin cho quyền lợi Gold
var tongtrankien1605 = {
  grace_period_expires_date: null,
  purchase_date: "2004-07-03T01:04:17Z",
  product_identifier: "com.kienmessi.premium.yearly",
  expires_date: "2099-12-18T01:04:17Z", // Gia hạn đến ngày 2099
};

// ========= Logic xử lý thông tin đăng ký ========= //
var obj = JSON.parse($response.body);

// Cập nhật thông tin đăng ký và quyền lợi cho người dùng
obj.subscriber.subscriptions["com.kienmessi.premium.yearly"] = kienmessi;
obj.subscriber.entitlements["Gold"] = tongtrankien1605;  // Cấp quyền Gold cho người dùng

// Thêm thông báo cho người dùng
obj.Attention = "Chúc mừng bạn, tài khoản của bạn đã được nâng cấp lên Locket Gold! Vui lòng không bán hoặc chia sẻ cho người khác!";

// Đảm bảo rằng thông tin đăng ký và quyền lợi được gán cho đúng người dùng (username)
obj.subscriber.username = username;

// Gửi lại phản hồi đã chỉnh sửa
$done({ body: JSON.stringify(obj) });
