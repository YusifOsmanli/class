

// Car classı yaradırsınız.field olaraq brand,model,color,year,speed,fuelCapacity,km(maşının indiyə qədər getdiyi məsafə),fuelFor1Km,currentFuel fieldləriniz olsun.ShowInfo() funksiyanız olsun maşının bütün məlumatlarını geri qaytarsın.AddFuel() methodunuz olsun parametr olaraq yanacaq qəbul etsin (20) yanacaq tutumunu aşırsa "yanacaq çənində yetəri qədər yer yoxdur deyilsin" əks halda "yanacaq uğurla əlavə edildi" yazılsın. Drive() funksiyanız olsun.paramert olaraq neçə km yol gediləcəyini qəbul etsin əgər yanacaq çənində yetəri qədər yanacaq yoxdursa "yetəri qədər yanacaq yoxdur yazılsın" əks halda "ünvana çatdıq yazılsın" və yanacaq çənindən həmin yanacaq çıxılsın və maşının km-i həmin qədər artsın və maşının məlumatlarını yenidən ekranda çap etsin.Məsələn:

// Hal hazırda yanacaq çənində 20 litr yanacaq var.Maşının km-i 5400 km-dir.FuelFor1km - 0.2l-dir.Drive(100) yazdığınız halda maşının km-i 5500 km olacaq.Hal hazırda çəndəki yanacaq - 0 L olacaq və ekranda maşının bütün datalarını çap edəcək


class Car{
    constructor(brand,model,color,year,speed,fuelcapacity,km,fuelFor1KM,currentFuel){
        this.brand=brand
        this.model=model
        this.color=color
        this.year=year
        this.speed=speed
        this.fuelcapacity=fuelcapacity
        this.km=km
        this.fuelFor1KM=fuelFor1KM
        this.currentFuel=currentFuel

    }

    ShowInfo(){
        return (this);  
        }

        AddFuel(yanacaq){

            if(this.currentFuel+yanacaq>this.fuelcapacity){
                console.log("yanacaq ceninde bu qeder yer yoxdur bes eder bu");

            }else{
                this.currentFuel+=yanacaq
               console.log( "yanacaq əlavə edildi");
            }

        }

        Drive(mesafe){
            var fuelCapacity=this.fuelFor1KM*mesafe
            if(fuelCapacity>this.currentFuel){
                console.log( "yanacq ceninde bu qeder yanacaq yoxu ayy kisi");
            }else{
                console.log("unvana catdiz")
                this.currentFuel-=fuelCapacity
                this.km+=mesafe
                this.ShowInfo();

            }

        }




}


let Car3 = new Car ("audi","A6","red","2014","320","80","32000","0.3","50")

console.log(Car3.ShowInfo());
console.log(Car3.AddFuel(20));
console.log(Car3.Drive(100));