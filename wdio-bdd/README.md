# WebdriverIO BDD Test Automation Framework

Bu proje, katmanlı mimari prensiplerine göre yapılandırılmış bir test otomasyon framework'üdür.

## Proje Yapısı

Proje üç ana katmandan oluşmaktadır:

### 1. Core Layer (`core/`)
Test otomasyon framework'ünün temel işlevselliğini içerir. Bu katman projeye özel değildir ve yeniden kullanılabilir bileşenler içerir.

- **`base/`**: Temel sınıflar
  - `BasePage.js`: Tüm page object'lerin türediği temel sınıf
  - `BaseElement.js`: Web element wrapper sınıfı
  
- **`utils/`**: Yardımcı araçlar
  - `Logger.js`: Loglama yardımcısı
  - `WaitHelper.js`: Bekleme işlemleri yardımcısı
  - `AssertHelper.js`: Assertion yardımcısı

### 2. Business Layer (`business/`)
Test edilen uygulamanın iş mantığıyla ilgili tüm işlevselliği içerir.

- **`pages/`**: Page Object Pattern implementasyonu
  - `LoginPage.js`: Login sayfası page object'i
  - `SecurePage.js`: Secure area sayfası page object'i
  
- **`actions/`**: İş mantığı akışları
  - `LoginActions.js`: Login işlemleri için business logic

### 3. Tests Layer (`tests/`)
Otomatik testler ve framework yapılandırmasını içerir.

- **`features/`**: Cucumber BDD feature dosyaları
  - `login.feature`: Login senaryoları
  
- **`step-definitions/`**: Cucumber step definition'ları
  - `steps.js`: Test adımları implementasyonu
  
- **`config/`**: Framework yapılandırma dosyaları
  - `wdio.conf.js`: WebdriverIO yapılandırma dosyası

## Tasarım Prensipleri

Bu framework aşağıdaki prensiplere uygun olarak tasarlanmıştır:

- **DRY (Don't Repeat Yourself)**: Kod tekrarını önlemek için ortak işlevsellik core layer'da toplanmıştır
- **KISS (Keep It Simple, Stupid)**: Basit ve anlaşılır kod yapısı tercih edilmiştir
- **YAGNI (You Aren't Gonna Need It)**: Sadece gerekli olan özellikler implemente edilmiştir
- **Page Object Pattern**: Web sayfaları için page object pattern kullanılmıştır
- **OOP Principles**: Nesne yönelimli programlama prensipleri uygulanmıştır

## Kurulum

```bash
npm install
```

## Test Çalıştırma

Tüm testleri çalıştırmak için:
```bash
npm test
```

Belirli bir tarayıcı için:
```bash
npm run test:chrome
npm run test:firefox
npm run test:safari
```

## Bağımlılıklar

- `@wdio/cucumber-framework`: Cucumber BDD framework desteği
- `@wdio/local-runner`: WebdriverIO local runner
- `@wdio/spec-reporter`: Test sonuç raporlama
- `chai`: Assertion kütüphanesi

