using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleWebApi
{
  public class User
  {
    string Email { get; set; }
    string Password { get; set; }
    string UserType { get; set; }
    bool EnforceLoginProtection { get; set; }
  }
}
