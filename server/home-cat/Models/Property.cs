namespace HomeCat.Models;

public class Property
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string City { get; set; } = "";
    public string Description { get; set; } = "";
    public decimal Price { get; set; }
    public double Size { get; set; }
    public int Rooms { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
}
