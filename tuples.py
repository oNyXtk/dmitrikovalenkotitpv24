def filtreeri_arvud(andmed):
    
    for num in andmed:
        if num % 10 == 0:
            

def leia_indeks(nimekiri, element):
    if element in nimekiri:
        return nimekiri.index(element)
    else:
        return -1  # Return -1 if the element is not found
