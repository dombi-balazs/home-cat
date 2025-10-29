using Microsoft.EntityFrameworkCore;
using HomeCat.Models;

namespace HomeCat.Data;

public class HomeCatContext : DbContext
{
    public HomeCatContext(DbContextOptions<HomeCatContext> options) : base(options) { }

    public DbSet<Property> Properties => Set<Property>();
}
