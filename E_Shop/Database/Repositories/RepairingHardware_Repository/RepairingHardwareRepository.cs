using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Shop.Database.Entities;

namespace E_Shop.Database.Repositories.RepairingHardware_Repository
{
    public class RepairingHardwareRepository : IRepairingHardwareRepository
    {
        private readonly DatabaseContext _databaseContext;

        public void CreateNewRecord(RepairingHardware repairingHardware)
        {
            _databaseContext.RepairingHardware.Add(repairingHardware);
        }

        public void DeleteRecord(int recordId)
        {
            throw new NotImplementedException();
        }

        public RepairingHardware GetRecordByCode(string code)
        {
            throw new NotImplementedException();
        }

        public RepairingHardware GetRecordByUser(string user)
        {
            throw new NotImplementedException();
        }

        public void ModifyRecord()
        {
            throw new NotImplementedException();
        }
    }
}
