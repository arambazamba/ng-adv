using System;
using System.Linq;

namespace SkillsApi
{
    public static class DBInitializer
    {
        public static void Initialize(SkillDBContext context)
        {
            context.Database.EnsureCreated();

            if (context.Topics.FirstOrDefault() == null)
            {

                var t1 = new Topic { id = 1, title = "Theming" };
                var t2 = new Topic { id = 2, title = "RxJS" };

                context.Topics.AddRange(t1, t2);

                var sk1 = new Skill { Name = "Custom Theme", Completed = true, Hours = 4, DueDate = DateTime.Now.AddMonths(-1) };
                var sk2 = new Skill { Name = "Theme Mixins", Completed = false, Hours = 3, DueDate = DateTime.Now.AddMonths(-2) };
                var sk3 = new Skill { Name = "Light & Dark Theme", Completed = false, Hours = 2, DueDate = DateTime.Now.AddMonths(2) };
                var sk4 = new Skill { Name = "RxJS Operators", Completed = true, Hours = 5, DueDate = DateTime.Now.AddDays(2)};
                var sk5 = new Skill { Name = "Custom Operators", Completed = false, Hours = 1, DueDate = DateTime.Now.AddYears(1)};

                context.Skills.AddRange(sk1, sk2, sk3, sk4, sk5);

                context.SaveChanges();
            }
        }
    }
}