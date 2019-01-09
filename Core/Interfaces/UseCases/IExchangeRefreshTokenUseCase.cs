using System;
using System.Collections.Generic;
using System.Text;
using Core.Dto.UseCaseRequests;
using Core.Dto.UseCaseResponses;

namespace Core.Interfaces.UseCases
{
    public interface IExchangeRefreshTokenUseCase : IUseCaseRequestHandler<ExchangeRefreshTokenRequest, ExchangeRefreshTokenResponse>
    {
    }
}
