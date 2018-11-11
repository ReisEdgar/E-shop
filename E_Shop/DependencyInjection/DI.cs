using Autofac;
using Autofac.Extensions.DependencyInjection;
using E_Shop.Database.Repositories.MessageRepository;
using E_Shop.Logic;
using E_Shop.Logic.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.DependencyInjection
{
    public class DI
    {
        public static IContainer AddRegistrationsToDIContainer(IServiceCollection services)
        {
            RegisterLogic(services);
            RegisterRepositories(services);

            var builder = new ContainerBuilder();
            builder.Populate(services);

            return builder.Build();
        }

        private static void RegisterLogic(IServiceCollection services)
        {
            services.AddScoped<IHardwareService, HardwareService>();
            services.AddScoped<IMessageService, MessageService>();
            services.AddScoped<IAuthorizationService, AuthorizationService>();
            services.AddScoped<IConversationService, ConversationService>();

        }

        private static void RegisterRepositories(IServiceCollection services)
        {
        }
    }
}

