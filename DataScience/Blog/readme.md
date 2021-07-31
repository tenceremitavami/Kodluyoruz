Nedir Bu Veri Bilimi?

Lise seviyesinde bir matematik ile limit konusunu bildiğinizi varsayarsak, sayıların sonsuza giderken yaklaşık değerlerini bulmayı biliyor olmalısınız. Örneğin içi dolu üstü açık bir karton kutu var ve siz bu kutaya her defasında şu an bulunduğunuz uzaklığın yarısı kadar mesafede yaklaşabiliyorsunuz. Bu şekilde devam ederek asla kutunun tam yanında olamazsınız ancak ona en yakın noktada durup üstünden bakarak içinde ne olduğunu görebilirsiniz. İşte limit de böyle tanımlanabilir. Limit sizin kutuyu eline almanızla ilgilenmez ona en yakın ne kadar durabilirsiniz bununla ilgilenir. Hmmm bir değere yaklaşmak, elindeki imkanları kullanarak bir yol çizerek, bir plan yaparak kutunun içinde ne olduğunu anlayabilmek için kutuya yaklaşmak. Veri biliminin tanımını andırıyor gibi sanki ne dersiniz? 
 
Veri bilimi, yapılandırılmış ve yapılandırılmamış verilerden bilgi ve öngörü elde etmek için bilimsel yöntemleri, süreçleri, algoritmaları ve sistemleri kullanan çok disiplinli bir alan olarak tanımlanmıştır. Veri bilimi elbette ki bir derya deniz. Bir öngörü oluşturabilmek tahminde bulunabilmek için veri toplamak bu işin temellerinden biri. Peki bir yapay zeka diyoruz makine öğrenimi diyoruz o kadar teknolojiden bahsediyoruz ancak gidip verileri biz topluyoruz! Bir çifçinin ürün yetiştirmesi gibi gerekl   i koşulları sağlayan veri bilimciler de bu sayede öngörüde bulunabiliyor. Çiftçi organik tarım yaparsa, hayvanlarına sağlıklı olması gereken besinler verirse alacağı verim de o kadar çok olur. Tıpkı bunun gibi veri bilimci için de en önemli hususlardan biri veri setleridir. Veri setleri toplanırken istenirse tüm veriler tek bir subjektif bir bakış açısı ile toplanıp her şey yalnızca o bakış açısından ibaretmiş gibi kolaylıkla gösterilebilir. Bir diğer durum bu veri setlerinin işlenmesi, test edilmesi gibi aşamalardır. Bu aşamalarda da benzer şekilde insan rol alacağı için tamamen objektif bir bakış açısı içerisinde olması beklenemez. İşte tüm bu yanılgılara veri biliminde bias denir. 

Bias kavramını veri bilimiyle ilgilenen hemen herkes duymuştur. Türkçe'ye önyargı olarak çevrilen bu kelime insanın mensup olduğu dinine, ırkına, ten rengine göre yargılanması olarak da tanımlanmaktadır. Yapa zeka diyoruz, makine öğrneimi diyoruz hani uzaya çıkıyorduk hala mı insanların ten rengine takılı kaldık derseniz de günlük hayatta kullandığımız teknolojilerden bariz bias örneklerinden biri olan, Twitter'ın fotoğraf ön izleme algoritmasını ele alalım:

Twitter'da hiç siyah ve beyaz tenli iki insanın fotoğrafını fotoğrafın uç kısımlarına konumlanmış olarak duracak şekilde yüklediniz mi? Birkaç Twitter kullanıcısının da fark ettiği ve dikkat çeken fotoğraf önizleme algoritmasında siyah bir kişinin yüzü ve bir beyaz kişinin yüzü olan gönderilerin örneklerini yayınlandığında Twitter'ın önizlemesi beyaz yüzleri daha sık gösterdi!

    1. Örnek İçin Fotoğraflar: 
    
Birinci Fotoğraf;

<img src="1.jpeg"
     alt="Example-1"
     style="float:left; margin-right: 10px;" width="100" height="300"/>
İkinci Fotoğraf;
<img src="2.jpeg"
     alt="Example-2"
     style="float:left; margin-right: 10px;" width="100" height="300"/>

    Ve önizleme sonucu:
  <img src="3.png"
     alt="Result-1"
     style="float:left; margin-right: 10px;" width="500" height="600"/>

    2. Örnek İçin Fotoğraflar: 
Birinci Fotoğraf;
<img src="4.jpeg"
     alt="Example-3"
     style="float:left; margin-right: 10px;" width="100" height="300"/>
İkinci Fotoğraf;
<img src="5.jpeg"
     alt="Example-4"
     style="float:left; margin-right: 10px;" width="100" height="300"/>

    Ve önizleme sonucu (Kırmızı kravatlarla alakası olmadığı ispatlanmış):
  <img src="6.png"
     alt="Result-2"
     style="float:left; margin-right: 10px;" width="500" height="600"/>

    3. Örnek İçin Fotoğraflar: 
Birinci Fotoğraf;
<img src="7.jpeg"
     alt="Example-3"
     style="float:left; margin-right: 10px;" width="100" height="300"/>
İkinci Fotoğraf;
<img src="8.jpeg"
     alt="Example-4"
     style="float:left; margin-right: 10px;" width="100" height="300"/>

   Kurgu karakterlerde bile bu durumun olduğu görülmüş:
  <img src="9.png"
     alt="Result-2"
     style="float:left; margin-right: 10px;" width="500" height="600"/>

     Kullanıcıların bunu fark etmesinden sonra yetkililerden de geliştirmeler yaptıklarına ilişkin açıklamalar gelmiş. Görüldüğü gibi ünlü bir sosyal medya platformu da olsanız insan elinden çıkan veri setleriyle işlem yapıldığında objektif sonuçlar elde etmek neredeyse imkansız. Bu ve bu gibi sebeplerden veri biliminde bias terimi ortaya çıkıyor. Bunun çözümü olarak da birçok farklı ırk ve kökenden insanın belki de bu işlemlerde söz hakkı olması gerekir ki bizim öğrettiğimiz makineler doğruya en yakın kararı verebilsin...
