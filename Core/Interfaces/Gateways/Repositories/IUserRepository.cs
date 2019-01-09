using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Core.Domain.Entities;
using Core.Dto.GatewayResponses.Repositories;

namespace Core.Interfaces.Gateways.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<CreateUserResponse> Create(string firstName, string lastName, string email, string userName, string password);
        Task<User> FindByName(string userName);
        Task<bool> CheckPassword(User user, string password);
    }
}
