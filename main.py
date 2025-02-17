import sonastik as myDictirionary
import tuples as myTuples

#opilane ={
#key value
#'nimi': "Thomas",
#'vanus': 20,
 #'klass': "12A"
#}

#json
#print(opilane['nimi'])
#print(opilane.get("vanus"))

#print(opilane.values())
#print(opilane.keys())

#opilane["address"] = "Tallinn"
#opilane.pop('nimi')

#del opilane['klass']

#print(opilane.values())
#print(opilane.keys())

#for elem in opilane.keys():
  # print(opilane[elem])
    
#for key, value in opilane.items():
    #print("see on võtti", key, "see on värtus", value)
    
#grade = {
    #"mari": [4,5,3,4], 
    #"Jaan": [2,3,2,3,3],
    #"Thomas": [3,2,4]
#}
#result = myDictirionary.arvutaKeskmineHinne(grade)
#print(result)
#word = "koodimine"
#result2 = myDictirionary.tahemargede_sagedus(word)
#print(result2)



tuple = (2,4,5)
print(tuple)
tuple2 = "oun", "pirn", "ploom"

andmed = (10,15,20,25,30,35)
tulemus = myTuples.filtreeri_arvud(andmed)
print(tulemus)


andmed = ["õun", "banaan", "apelsin", "viinamari"]
print(leia_indeks(andmed, "apelsin"))
print(leia_indeks(andmed, "pirn"))

    
