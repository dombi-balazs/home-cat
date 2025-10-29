using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HomeCat.Data;
using HomeCat.Models;

namespace HomeCat.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PropertiesController : ControllerBase
{
    private readonly HomeCatContext _context;

    public PropertiesController(HomeCatContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Property>>> GetAll()
    {
        return await _context.Properties.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Property>> GetOne(int id)
    {
        var property = await _context.Properties.FindAsync(id);
        if (property == null) return NotFound();
        return property;
    }

    [HttpPost]
    public async Task<ActionResult<Property>> Create(Property property)
    {
        _context.Properties.Add(property);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetOne), new { id = property.Id }, property);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Property property)
    {
        if (id != property.Id) return BadRequest();
        _context.Entry(property).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var property = await _context.Properties.FindAsync(id);
        if (property == null) return NotFound();
        _context.Properties.Remove(property);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
