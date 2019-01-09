﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Request;
using FluentValidation;

namespace API.Models.Validation
{
    public class RegisterUserRequestValidator : AbstractValidator<RegisterUserRequest>
    {
        public RegisterUserRequestValidator()
        {
            RuleFor(x => x.FirstName).Length(2, 30);
            RuleFor(x => x.LastName).Length(2, 30);
            RuleFor(x => x.Email).EmailAddress();
            RuleFor(x => x.UserName).Length(3, 255);
            RuleFor(x => x.Password).Length(6, 15);
        }
    }
}
