using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Interfaces
{
    public interface IOutputPort<in TUseCaseResponse>
    {
        void Handle(TUseCaseResponse response);
    }
}
