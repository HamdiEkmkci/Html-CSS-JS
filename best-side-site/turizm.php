<!DOCTYPE html>
<html lang="tr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Turizm Hizmetleri</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Best Side Group</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            
        <link href="assets/css/turizm.css?v=<?=time(); ?>" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/js/all.min.js"
            integrity="sha512-naukR7I+Nk6gp7p5TMA4ycgfxaZBJ7MO5iC3Fp6ySQyKFHOGfpkSZkYVWV5R7u7cfAicxanwYQ5D1e17EfJcMA=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <?php include('header.php')?>
    </head>
    <body>
        <div class="row slide">
            <div class="col-md-12">
                <div class="container">
                    <img class="slider-img-1 " src="assets/images/turizm.png" class="d-inline-block" style="width: 100%; max-width: 630px;height: auto;">
                    <span class="d-inline-block " style="vertical-align:top;">
                        <h1 class="ps-5 slider-text-1 slider-cap" style="font-size: 4rem;"><b>TURİZM</b><br>HİZMETLERİ</h1><br>
                        <a href="tel:0 224 452 16 16"><button type="button" class="btn btn-outline-secondary ms-5 p-2 px-4 ara-btn"  style="
        background: linear-gradient(white, white) padding-box,
                linear-gradient(to right, #8c8e8f, white) border-box;
        border-radius: 5rem;
        border: 4px solid transparent;
        font-weight: 500;
        text-transform: uppercase;" >Şimdi Ara</button></a>
                    </span>
                </div>
            </div>
        </div>
        <div class="container  text">
            <div class="row text-center mt-5">
                <baslık-2>TURİZM HİZMETLERİ</baslık-2>
                <div class="col-12 mt-4">
                    <div style=" font-size:18px">
                        <p-1>Turizm alanında, öncelikle Bursa olmak üzere devamında tüm 
                            Türkiye’de güven öncelikli hizmet veren bir şirket olduğumuzu 
                            söylemekten onur duyarız. 
                            <br> <br>
                            Firmamıza danışan tüm misafirlerimize işinin ehli kadromuz ile 
                            profesyonel hizmet sunmaktayız.
                            <br> <br> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
            
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <baslık-1>Hangi Hizmetleri Veriyoruz?</baslık-1>
                    <ul class="listG mt-4">
                        <li>
                        Günlük Şehir Turları
                        </li>
                        <li>
                        Araç Kiralama Hizmeti
                        </li>
                        <li>
                        VIP Transfer Hizmeti
                        </li>
                        <li>
                        Rehberlik Hizmetleri
                        </li>
                    </ul>
                </div>
                <div class="col-md-8 col-sm-8 p-5 min-img-row">
                    <img class="min-img"src="assets/images/turizm-2.png" style="max-height:600px;">
                </div>
            </div>
        </div>
        <div class="p-5 mt-5" id="yorumlar" style="background-image: url('assets/images/turizm-3.png');">
            <filtre></filtre>
            <div class="row mt-3" style="z-index: 1;position: relative;">
                <div class="col-12 text-center mb-5">
                    <baslık-2>Hakkımızdaki Yorumlar</baslık2>
                    <h5 style="color: #252E57;">Bizimle çalışan profesyonel çözüm ortaklarımıza güzel yorumları için teşekkür ederiz.</h5>
                </div>
            </div>
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-4 mb-5 mb-md-0">
                        <div class="card yorum">
                            <div class="card-body">
                                <i class="fa-solid fa-quote-right ikon text-primary"></i>
                                <yorum>Ailem ile tatilimizi organize edip bize konforlu bir tatil sunan Best Side Turizm ailesine teşekkür ederim.</yorum>
                                <yorumYapan>GÖKHAN ÇIRA</yorumYapan>
                                <img class="avatar" src="assets/images/avatar/avatar1.png">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5 mb-md-0">
                        <div class="card yorum">
                            <div class="card-body">
                                <i class="fa-solid fa-quote-right ikon text-primary"></i>
                                <yorum>Çıktığımız Bursa gezisinde ben ve arkadaşlarım için rehber temini yaptılar.Talebimizi çok seri ve profesyonel bir şekilde çözdüler:)</yorum>
                                <yorumYapan>MERVE BAYRAM</yorumYapan>
                                <img class="avatar" src="assets/images/avatar/avatar2.png">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card yorum">
                            <div class="card-body">
                                <i class="fa-solid fa-quote-right ikon text-primary"></i>
                                <yorum>Havaalanından transferimizi gerçekleştirdiler.Güven veren güzel bir firma.</yorum>
                                <yorumYapan>SALMAN ALSAİDAN</yorumYapan>
                                <img class="avatar" src="assets/images/avatar/avatar4.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row" style="background-color:#F3F3F3">
            <div class="col-md-2 kutu">
                <div >
                    <p>01</p>
                </div>
            </div>
            <div class="col-md-2 kutu">
                <div style="padding-top:3rem;">
                    <baslik>Müşteri Talepleri</baslik><br><br>
                    Tüm istekleriniz detaylı bir şekilde listelenip analiz edilir.
                </div>
            </div>
            <div class="col-md-2 kutu">
                <div>
                    <p>02</p>
                </div>
            </div>
            <div class="col-md-2 kutu">
                <div style="padding-top:3rem;"> 
                    <baslik>Hizmet Yönlendirmesi</baslik><br><br>
                    Analiz edilen istekleriniz doğrultusunda ekibimizi hizmetinize sunarız.
                </div>
            </div>
            <div class="col-md-2 kutu">
                <div>
                    <p>03</p>
                </div>
            </div>
            <div class="col-md-2 kutu">
                <div style="padding-top:3rem;">
                    <baslik>Takip ve Geri Bildirim</baslik><br><br>
                    Verilen hizmetin takibi yapılır ve geri bildiriminiz alınır.
                </div>
            </div>
        </div>
    </body>
        <?php include('footer.php')?>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</html>