import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Calendar, DollarSign, Home as HomeIcon, Leaf, Users } from "lucide-react";
import { useState } from "react";

/**
 * Modern Luxury Minimalism Design
 * - Forest Green (#1B4D3E) primary color
 * - Cream (#F5F1E8) background
 * - Gold (#D4AF37) accents
 * - Playfair Display for headings, Lato for body
 */

export default function HomePage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", contactForm);
    alert("Cảm ơn anh/chị! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.");
    setContactForm({ name: "", phone: "", email: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Q</span>
            </div>
            <h1 className="text-2xl font-bold text-primary">Quảng Yên Centro</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#amenities" className="text-foreground hover:text-primary transition-colors">Tiện ích</a>
            <a href="#policies" className="text-foreground hover:text-primary transition-colors">Chính sách</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Liên hệ</a>
          </nav>
          <Button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Tư vấn ngay
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388856287/A6W8LBRJTnxkKfFq7YeuBJ/hero-quang-yen-oW2m4VtXJW8myjiFKWeWpY.webp"
            alt="Quảng Yên Centro"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20"></div>
        </div>
        
        <div className="container relative py-24 md:py-32 flex flex-col justify-center min-h-[600px]">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-12 h-0.5 bg-accent"></span>
              Dự án bất động sản hàng đầu
            </p>
            <h1 className="text-white mb-6 leading-tight">
              Tâm Điểm Đầu Tư & An Cư Lý Tưởng
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-xl leading-relaxed">
              Quảng Yên Centro không chỉ là một lô đất – đây là một vị thế đầu tư và an cư lâu dài với pháp lý sở hữu lâu dài vững chắc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Khám Phá Dự Án
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Xem Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-center text-primary mb-16">Tiến Độ Dự Án</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-border hover:shadow-md transition-all">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">06/2027</h3>
                <p className="text-foreground/70">Dự kiến khởi công</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-border hover:shadow-md transition-all">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">12/2027</h3>
                <p className="text-foreground/70">Dự kiến bàn giao</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-border hover:shadow-md transition-all">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Lâu Dài</h3>
                <p className="text-foreground/70">Sở hữu lâu dài</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-accent font-semibold mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                Tiện Ích Nội Khu Đồng Bộ
              </p>
              <h2 className="text-primary mb-6">Không Gian Sống Toàn Diện</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Quảng Yên Centro được thiết kế với tầm nhìn toàn diện, cung cấp mọi tiện ích cần thiết cho cuộc sống hiện đại và chất lượng cao.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">Công viên trung tâm 7.400m² – lá phổi xanh của dự án</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">Đường dạo bộ, nhà sinh hoạt cộng đồng hiện đại</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">Phòng Yoga, trường mầm non chất lượng</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">Sân chơi trẻ em, sân trượt patin, sân bóng rổ</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">Chuỗi nhà hàng – café nội khu đa dạng</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388856287/A6W8LBRJTnxkKfFq7YeuBJ/amenities-park-XmgLJ9k5QbQrNJsBxwT9vU.webp"
                alt="Công viên trung tâm"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388856287/A6W8LBRJTnxkKfFq7YeuBJ/community-lifestyle-PHyhiYeHDHa2qWXLyy4NSJ.webp"
                alt="Cộng đồng sống"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-accent font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Cộng Đồng & Lối Sống
              </p>
              <h2 className="text-primary mb-6">Nơi Cuộc Sống Reo Vang</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Tại Quảng Yên Centro, bạn không chỉ sở hữu một ngôi nhà, mà là một phần của cộng đồng sôi động, nơi mọi người cùng chia sẻ giá trị sống tốt đẹp.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Từ các hoạt động cộng đồng, sự kiện văn hóa, đến những khoảnh khắc gia đình bình yên – mọi thứ đều được tạo điều kiện để bạn tận hưởng cuộc sống chất lượng cao.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section id="policies" className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-center text-primary mb-16">Chính Sách Bán Hàng Ưu Đãi</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Thanh Toán Theo Tiến Độ</h3>
                </div>
                <p className="text-foreground/80 mb-4">Linh hoạt theo tiến độ xây dựng</p>
                <p className="text-accent font-bold text-lg">Chiết khấu 3%</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Thanh Toán Sớm</h3>
                </div>
                <p className="text-foreground/80 mb-4">Ưu đãi cho khách hàng quyết định nhanh</p>
                <p className="text-accent font-bold text-lg">Chiết khấu 7%</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Hỗ Trợ Tài Chính</h3>
                </div>
                <p className="text-foreground/80 mb-4">Vay từ các ngân hàng uy tín</p>
                <p className="text-accent font-bold text-lg">70% giá trị – Miễn lãi 18 tháng</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-center text-foreground/80">
              <span className="font-semibold text-primary">Lưu ý:</span> Các chính sách này có thể thay đổi tùy theo thời điểm. Vui lòng liên hệ trực tiếp để được tư vấn chi tiết nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-center text-primary mb-16">Vị Trí Chiến Lược</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Địa Điểm Lý Tưởng
              </p>
              <h3 className="text-2xl font-bold text-primary mb-6">Quảng Yên, Quảng Ninh</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Quảng Yên Centro nằm tại vị trí chiến lược, gần kề các tiện ích công cộng, trung tâm thương mại, bệnh viện quốc tế và sân bay Van Đồn.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">✓</span>
                  <span>Gần đường cao tốc Ha Long - Cái Lân</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">✓</span>
                  <span>Cách sân bay Van Đồn 30km</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">✓</span>
                  <span>Gần trung tâm thương mại và bệnh viện</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">✓</span>
                  <span>Kết nối thuận tiện với các khu vực lân cận</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388856287/A6W8LBRJTnxkKfFq7YeuBJ/location-map-dk747Q9h3gQfxnehEfhaaE.webp"
                alt="Bản đồ vị trí"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-primary mb-8">Liên Hệ Tư Vấn</h2>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Hãy liên hệ với chúng tôi để được tư vấn chi tiết về dự án Quảng Yên Centro. Đội ngũ chuyên viên của chúng tôi sẵn sàng giải đáp mọi thắc mắc của bạn.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Điện thoại</p>
                    <p className="text-accent font-bold text-lg">0368 318 081</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-accent">info@quangyencentro.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Địa chỉ</p>
                    <p className="text-foreground/80">Quảng Yên, Quảng Ninh, Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-primary mb-6">Gửi Thông Tin Của Bạn</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Họ và tên</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Nhập họ tên của bạn"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="Nhập số điện thoại"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="Nhập email của bạn"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2"
                >
                  Gửi Thông Tin
                </Button>
              </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Quảng Yên Centro</h4>
              <p className="text-primary-foreground/80 text-sm">Dự án bất động sản hàng đầu tại Quảng Yên, Quảng Ninh.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liên Kết</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#amenities" className="hover:text-accent transition-colors">Tiện ích</a></li>
                <li><a href="#policies" className="hover:text-accent transition-colors">Chính sách</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Liên hệ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Thông Tin</h4>
              <ul className="space-y-2 text-sm">
                <li>Điện thoại: 0368 318 081</li>
                <li>Email: info@quangyencentro.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Theo Dõi</h4>
              <p className="text-primary-foreground/80 text-sm">#quangyencentro #datnenquangyen #khudothiquangyen</p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2026 Quảng Yên Centro. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
