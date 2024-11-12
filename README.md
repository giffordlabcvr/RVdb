RVdb
====

### Overview

The **Retrovirus Database (RVdb)** is a **[GLUE](https://github.com/giffordlabcvr/gluetools/wiki)** resource supporting comparative analysis of retroviruses (family *Retroviridae*). RVdb was created in collaboration with the Retrovirus Study Group of the International Committee on Taxonomy of Viruses (**ICTV**), and contains data and analysis logic supporting the phylogenetic classification of retroviruses.

### Background

**Retroviruses** are a family of RNA viruses that use reverse transcription to integrate their genetic material into the DNA of host cells, a unique characteristic that distinguishes them from other viruses. This family includes notable viruses such as HIV, which causes AIDS, as well as other viruses that infect animals and humans. Retroviruses have played a significant role in molecular biology and virology research, contributing to our understanding of gene regulation, virus-host interactions, and viral evolution. Their ability to integrate into host genomes has implications for both viral pathogenesis and the study of endogenous retroviruses, which are remnants of ancient retrovirus DNA sequences embedded in the germline genomes of host species.

The **ICTV** is the global authority on virus classification, responsible for the standardization of virus taxonomy and nomenclature. Established in the 1960s under the International Union of Microbiological Societies (IUMS), ICTV's mission is to create a universally accepted virus taxonomy, define virus species and higher taxonomic levels, and establish standardized virus names. ICTV's work supports the virology community in organizing virus diversity, enabling clearer communication and research continuity.

**GLUE** is an open, integrated software toolkit designed for storing and interpreting sequence data. It supports the creation of bespoke projects, incorporating essential data items for comparative genomic analysis, such as sequences, multiple sequence alignments, genome feature annotations, and other associated data. Projects are loaded into the GLUE "engine," forming a relational database that represents the semantic relationships between data items. This foundation supports systematic comparative analyses and the development of sequence-based resources.

### Scope and Objectives

**RVdb** organizes and provides access to retrovirus taxonomy data, sequences, alignments, and phylogenies. With **GLUE**, the database offers an integrated approach to:

-   Access and reuse phylogenetic reconstructions used in taxonomic classification.
-   Develop and validate taxonomic hypotheses.
-   Support comparative genomics studies and reproducible analyses within a collaborative framework.

### Key Features

-   **Comprehensive Reference Sequence Collection**\
    RVdb includes all ICTV-recognized retrovirus species reference sequences, providing a foundational dataset for taxonomic and comparative studies.

-   **NCBI and ICTV Data Integration**\
    RVdb combines ICTV species classifications with NCBI reference sequences, ensuring comprehensive and accurate data alignment.

-   **Codon-based Reverse Transcriptase (RT) Alignment**\
    Features a curated, codon-aligned RT sequence alignment spanning all retrovirus species, which can be edited and updated via version control (GitHub). This alignment is essential for building accurate phylogenies and standardizing retrovirus taxonomy.

-   **Reproducible RT Phylogeny Construction**\
    Through GLUE, RVdb enables a standardized, reproducible process for constructing RT phylogenies, essential for maintaining a consistent taxonomic foundation across studies.

-   **Data Reusability**\
    In line with data-oriented programming principles, RVdb preserves raw data in a relational format, enabling its reuse beyond the GLUE environment. Researchers can extract, repurpose, and analyze RVdb data in various contexts, supporting flexible integration across different platforms and tools.

## Contributing

We welcome contributions from the community! If you're interested in contributing to RVdb, please review our [Contribution Guidelines](./md/CONTRIBUTING.md).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./md/code_of_conduct.md)


## License

The project is licensed under the [GNU Affero General Public License v. 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)

## Contact

For questions, issues, or feedback, please open an issue on the [GitHub repository](https://github.com/giffordlabcvr/RVdb/issues).

* * * * *
