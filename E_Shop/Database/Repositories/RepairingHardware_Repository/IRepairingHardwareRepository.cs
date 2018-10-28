using E_Shop.Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Repositories.RepairingHardware_Repository
{
    interface IRepairingHardwareRepository
    {
        void CreateNewRecord(RepairingHardware repairingHardware);
        void DeleteRecord( int recordId);
        void ModifyRecord();
        RepairingHardware GetRecordByCode(string code);
        RepairingHardware GetRecordByUser(string user);
    }
}
