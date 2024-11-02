var seqIDs = glue.getTableColumn(glue.command(["list", "sequence", "-w", "source.name like 'fasta-refseqs-erv-rt'"]), "sequenceID");

_.each(seqIDs, function(sequenceID) {
	glue.inMode("/sequence/fasta-refseqs-erv-rt/"+sequenceID, function() {
		var length = glue.command("show length").lengthResult.length;
		glue.command(["set", "field", "length", length]);
	});
});