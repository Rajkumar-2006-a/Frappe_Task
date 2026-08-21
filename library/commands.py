import click
@click.command()
def learn():
    click.echo("Hello")
    print("Hi")
    
@click.command("raj")
@click.option("--name")
def raj(name):
    print(f"Hello {name}")
    

@click.command("wel")
@click.argument("greet")
def wel(greet):
    print(f"welcome {greet}")
commands=[learn,raj,wel]