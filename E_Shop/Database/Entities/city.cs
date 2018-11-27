using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Entities
{
    public class city
    {
        public int Id { get; set; }
        public location location { get; set; }
    }

    public enum location
    {
        Akmenės_r,
        Alytaus_r,
        Alytus,
        Anykščių_r,
        Birštonas,
        Biržų_r,
        Druskininkai,
        Elektrėnai,
        Ignalinos_r,
        Jonavos_r,
        Joniškio_r,
        Jurbarko_r,
        Kaišiadorių_r,
        Kalvarija,
        Kaunas,
        Kauno_r,
        Kazlų_Rūda,
        Kėdainių_r,
        Kelmės_r,
        Kita,
        Klaipėda,
        Klaipėdos_r,
        Kretingos_r,
        Kupiškio_r,
        Lazdijų_r,
        Marijampolė,
        Mažeikių_r,
        Molėtų_r,
        Neringa,
        Pagėgiai,
        Pakruojo_r,
        Palanga,
        Panevėžio_r,
        Panevėžys,
        Pasvalio_r,
        Plungės_r,
        Prienų_r,
        Radviliškio_r,
        Raseinių_r,
        Rietavas,
        Rokiškio_r,
        Šakių_r,
        Šalčininkų_r,
        Šiauliai,
        Šiaulių_r,
        Šilalės_r,
        Šilutės_r,
        Širvintų_r,
        Skuodo_r,
        Švenčionių_r,
        Tauragės_r,
        Telšių_r,
        Trakų_r,
        Ukmergės_r,
        Utenos_r,
        Varėnos_r,
        Vilkaviškio_r,
        Vilniaus_r,
        Visaginas,
        Zarasų_r
        
    }
}
