import Layout from "@mui-treasury/layout";

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder
    .create("whatever_id")
    .registerConfig("xs", {
      position: "sticky",
    })
    .registerConfig("md", {
      position: "fixed", // won't stick to top when scroll down
    });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("unique_id", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      anchor: "left",
      width: "auto", // 'auto' is only valid for temporary variant
    })
    .registerPermanentConfig("md", {
      width: 256, // px, (%, rem, em is compatible)
      collapsible: true,
      collapsedWidth: 64,
    });
});

scheme.configureInsetSidebar(builder => {
  builder
    .create("secondarySidebar", { anchor: 'right' })
    .registerFixedConfig('md', {
      width: 256,
    })
})

export default scheme;