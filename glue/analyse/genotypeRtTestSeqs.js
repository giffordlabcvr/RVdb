//Do serotype recognition for all ncbi curated sequences

var ervRtTestSet;
var sourceName ='fasta-erv-rt-test';
var whereClause = "source.name = 'fasta-erv-rt-test'";

ervRtTestSet = glue.tableToObjects(glue.command(["list", "sequence", "sequenceID", "-w", whereClause]));
//glue.log("INFO", "RESULT WAS ", ervRtTestSet);

_.each(ervRtTestSet, function(ervRtTestSet) {

	var sequenceID = ervRtTestSet.sequenceID;
	var sourceName ='fasta-erv-rt-test';
	//glue.log("INFO", "ID RESULT WAS ", sequenceID);
	
	var sequenceWhereClause = "source.name = '" + sourceName + "' and sequenceID = '" + sequenceID + "'";
	var genotypeResults;
	glue.inMode("/module/xrvRtMaxLikelihoodGenotyper", function() {
		genotypeResults = glue.command(["genotype", "sequence", "-w", sequenceWhereClause]);
		glue.log("INFO", "Genotype RESULT WAS ", genotypeResults);			
	});

	var genotypeRows    = genotypeResults.genotypeCommandResult.row;
	var genotypeRow     = genotypeRows[0].value;
	var tribeResult     = genotypeRow[2]
	var subfamilyResult = genotypeRow[3]
	var genusResult     = genotypeRow[4]
	var subgenusResult  = genotypeRow[5]
	var speciesResult   = genotypeRow[6]

	if (tribeResult) {
		glue.log("INFO", "Tribe RESULT WAS ", tribeResult);
		var tribe = tribeResult.replace("AL_RT_TRIBE_", "");			
		glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
			glue.command(["set", "field", "tribe", tribe]);
		});
	}
	if (subfamilyResult) {
		glue.log("INFO", "Subfamily RESULT WAS ", subfamilyResult);
		var subfamily = subfamilyResult.replace("AL_RT_SUBFAMILY_", "");			
		glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
			glue.command(["set", "field", "subfamily", subfamily]);
		});
	}
	if (genusResult) {	
		glue.log("INFO", "Genus RESULT WAS ", genusResult);			
		var genus = genusResult.replace("AL_RT_GENUS_", "");			
		glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
			glue.command(["set", "field", "genus", genus]);
		});			
	}
	if (subgenusResult) {	
		glue.log("INFO", "Genus RESULT WAS ", subgenusResult);			
		var subgenus = subgenusResult.replace("AL_RT_SUBGENUS_", "");			
		glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
			glue.command(["set", "field", "subgenus", subgenus]);
		});			
	}
	if (speciesResult) {	
		glue.log("INFO", "Species RESULT WAS ", speciesResult);			
		var species = speciesResult.replace("AL_RT_SPECIES_", "");			
		glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
			glue.command(["set", "field", "species", species]);
		});			
	}


});	

