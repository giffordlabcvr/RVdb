// list the RT reference sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'fasta-refseqs-erv-rt'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/fasta-refseqs-erv-rt/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});


// list the NCBI ERV reference sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-refseqs-erv'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-refseqs-erv/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});


// list the spuma ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-spuma'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-spuma/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the lentivirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-lenti'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-lenti/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the deltaretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-delta'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-delta/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the alpharetrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-alpha'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-alpha/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the betaretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-beta'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-beta/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});


// list the kapparetrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-kappa'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-kappa/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});


// list the nuretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-nu'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-nu/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});



// list the unclassified clade II ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-clade-II-unc'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-clade-II-unc/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});



// list the gammaretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-gamma'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-gamma/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the zetaretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-zeta'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-zeta/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the rhoretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-rho'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-rho/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the iotaretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-iota'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-iota/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the etaretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-eta'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-eta/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the thetaretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-theta'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-theta/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the tauretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-tau'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-tau/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});
// list the oceanretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-ocean'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-ocean/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the xiretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-xi'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-xi/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the tethysretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-tethys'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-tethys/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});


// list the unclassified clade I ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-clade-I-unc'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-clade-I-unc/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the lambdaretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-lambda'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-lambda/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the sigmaretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-sigma'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-sigma/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the omegaretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-omega'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-omega/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the phiretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-phi'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-phi/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

// list the chiretrovirus ERV sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'erv-chi'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "erv_refcon_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/erv-chi/"+seqId, function() {
        glue.command(["set", "link-target", "erv_refcon_data", "custom-table-row/erv_refcon_data/"+seqId]);
    });
});

