<template>
    <div :class="columnClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Column',
        props: {
            size: {
                type: [ String, Number ],
                required: false,
                default: '3'
            },
            responsiveSize: {
                type: [ String, Number ],
                required: false,
                default: ''
            },
            mobileSize: {
                type: [ String, Number ],
                required: false,
                default: ''
            },
            marginBottom: {
                type: [ String, Number ],
                required: false,
                default: ''
            },
        },
        computed: {
            columnClass() {
                var classList = [];
                if ( this.size ) {
                    classList.push('col-' + this.size);
                }
                if ( this.responsiveSize ) {
                    classList.push('col-md-' + this.responsiveSize);
                }
                if ( this.mobileSize ) {
                    classList.push('col-sm-' + this.mobileSize);
                }
                if ( this.marginBottom ) {
                    classList.push('mb-' + this.marginBottom);
                }

                return classList.join(' ');
            }
        },
        methods: {
            handleClick: function(link) {
                if ( link ) {
                    window.location.href = link;
                }
            }
        },
    }
</script>

<style>
    [class*="col-"] {
		position: relative;
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
	}
    .col-2 {
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }
    .col-3 {
		flex: 0 0 25%;
		max-width: 25%;
	}
	.col-4 {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
    .col-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
	.col-8 {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
    .col-9 {
		flex: 0 0 75%;
        max-width: 75%;
	}
    .col-10 {
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
	.no-gutters > [class*="col-"] {
		padding-right: 0;
		padding-left: 0;
	}

    /* .v-center,
    .h-center {
        flex-wrap: wrap;
    }
    .v-center {
        align-items: center;
    }
    .h-center {
        justify-content: center;
    } */

    .offset-2 {
        margin-left: 16.666667%;
    }

    .offset-3 {
        margin-left: 25%;
    }

    .offset-4 {
        margin-left: 33.333333%;
    }

	@media (max-width: 767px) {
		.col-md-6 {
			flex: 0 0 50%;
			max-width: 50%;
        }
        
        .col-md-12 {
			flex: 0 0 100%;
            max-width: 100%;
		}
    }
    
    @media (max-width: 575px) {
        .col-sm-12 {
			flex: 0 0 100%;
            max-width: 100%;
		}
    }
</style>
