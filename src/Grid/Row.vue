<template>
    <div :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
    
    export default {
        name: 'Row',
        props: {
            rowLineSeparation: {
                type: Boolean,
                required: false,
                default: false
            },
            noGutters: {
                type: Boolean,
                required: false,
                default: false
            },
            marginBottom: {
                type: [ String, Number ],
                required: false,
                default: ''
            },
            equalizeheight: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        computed: {
            rowClass() {
                var classList = [ 'row' ];
                if ( this.rowLineSeparation ) {
                    classList.push('row-line-separation');
                }
                if ( this.noGutters ) {
                    classList.push('no-gutters');
                }
                if ( this.marginBottom ) {
                    classList.push('mb-' + this.marginBottom);
                }
                if ( this.equalizeheight ) {
                    classList.push('row-eq-height');
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

<style lang="scss">
    .row {
		display: flex;
		flex-wrap: wrap;
		margin-right: -15px;
		margin-left: -15px;
	}
	.row-line-separation {
		justify-content: space-around;
	}
	.no-gutters {
		margin-right: 0;
		margin-left: 0;
	}
    .row-eq-height {
        display: flex;
        flex-wrap: wrap;

        .avui-card {
            height: 100%;
        }

        > [class*=col-] {
            display: flex;
            flex-direction: column;
        }
    }
</style>
